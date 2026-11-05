const DB_NAME = 'nipio-db'
const STORE = 'users'

const DEMO_USER = { username: 'doncacareo', name: 'Don Cacareo', password: 'pollo123' }

let dbPromise

function openDB() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1)
      req.onupgradeneeded = () => {
        req.result.createObjectStore(STORE, { keyPath: 'username' })
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    }).then(async (db) => {
      if (!(await getUser(db, DEMO_USER.username))) {
        await saveUser(db, await buildUser(DEMO_USER))
      }
      return db
    })
  }
  return dbPromise
}

function request(db, mode, fn) {
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE))
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

const getUser = (db, username) => request(db, 'readonly', (s) => s.get(username))
const saveUser = (db, user) => request(db, 'readwrite', (s) => s.add(user))

async function hash(password, salt) {
  const data = new TextEncoder().encode(salt + password)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

async function buildUser({ username, name, password }) {
  const salt = crypto.randomUUID()
  return { username, name, salt, passwordHash: await hash(password, salt), createdAt: Date.now() }
}

const normalize = (username) => username.trim().toLowerCase()

export async function registerUser({ username, name, password }) {
  const db = await openDB()
  username = normalize(username)
  if (await getUser(db, username)) {
    throw new Error('Ese usuario ya existe. Otro pollo te ganó el nombre.')
  }
  await saveUser(db, await buildUser({ username, name: name.trim(), password }))
  return { username, name: name.trim() }
}

export async function loginUser(username, password) {
  const db = await openDB()
  const user = await getUser(db, normalize(username))
  if (!user || (await hash(password, user.salt)) !== user.passwordHash) {
    throw new Error('Usuario o contraseña incorrectos. ¿Seguro que eres de este gallinero?')
  }
  return { username: user.username, name: user.name }
}
